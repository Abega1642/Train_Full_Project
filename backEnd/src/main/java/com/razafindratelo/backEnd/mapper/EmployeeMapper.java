package com.razafindratelo.backEnd.mapper;

import com.razafindratelo.backEnd.dto.EmployeeDto;
import com.razafindratelo.backEnd.entity.Employee;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

public class EmployeeMapper {

    public static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getEmployeeId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getEmployeeId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
}
