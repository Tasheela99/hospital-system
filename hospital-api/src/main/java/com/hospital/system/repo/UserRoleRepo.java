package com.hospital.system.repo;


import com.hospital.system.enity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository
@EnableJpaRepositories
public interface UserRoleRepo extends JpaRepository<UserRole,String> {
    @Query(value = "SELECT * FROM user_role WHERE role_name=?1",nativeQuery = true)
    public UserRole findUserRoleByRoleName(String role);


}
