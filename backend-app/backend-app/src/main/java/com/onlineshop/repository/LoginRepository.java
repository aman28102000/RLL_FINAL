package com.onlineshop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onlineshop.bean.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, String>{
List<Login> findBytypeOfUser(String typeOfUser);
}
