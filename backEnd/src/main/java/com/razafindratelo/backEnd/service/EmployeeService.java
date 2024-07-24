package com.razafindratelo.backEnd.service;

import com.razafindratelo.backEnd.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(long id);

    List<EmployeeDto> getAllEmployees();
}
