package com.razafindratelo.backEnd.repository;

import com.razafindratelo.backEnd.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
