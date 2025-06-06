<?php

require_once __DIR__ . '/../config/Database.php';
require_once __DIR__ . '/../core/Model.php';

class UserRole
{
    private $conn;
    private $table = 'user_roles';

    public function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

    public function createUserRole($data)
    {
        $stmt = $this->conn->prepare("INSERT INTO " . $this->table . " (`user_id`, `role_id`, `resort_id`) VALUES (:user_id, :role_id, :resort_id)");
        return   $stmt->execute([
            ':user_id' => $data['user_id'],
            ':role_id' => $data['role_id'],
            ':resort_id' => $data['resort_id']
        ]);
    }

    public function hasRole($user_id)
    {
        $stmt = $this->conn->prepare("SELECT id FROM " . $this->table . " WHERE user_id = :user_id");
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();

        return $stmt->rowCount() > 0;
    }


    public function getUserRoles($user_id)
    {
        $stmt = $this->conn->prepare("SELECT roles.role as role, resort_id FROM " . $this->table . " JOIN  roles on roles.id = user_roles.role_id WHERE user_roles.user_id = :user_id");
        $stmt->bindParam('user_id', $user_id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteUserRole($user_role_id)
    {
        $stmt = $this->conn->prepare("DELETE FROM " . $this->table . " WHERE id = :id");
        return $stmt->execute(['id' => $user_role_id]);
    }
}
