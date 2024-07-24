package com.razafindratelo.backEnd.service.implementation;

import com.razafindratelo.backEnd.dto.EmployeeDto;
import com.razafindratelo.backEnd.entity.Employee;
import com.razafindratelo.backEnd.exception.RessourceNotFoundException;
import com.razafindratelo.backEnd.mapper.EmployeeMapper;
import com.razafindratelo.backEnd.repository.EmployeeRepository;
import com.razafindratelo.backEnd.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImplementation implements EmployeeService {
    EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(
                        () -> new RessourceNotFoundException("We didn't find any employee with id: " + id));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
