package com.razafindratelo.backEnd.controller;

import com.razafindratelo.backEnd.dto.EmployeeDto;
import com.razafindratelo.backEnd.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/infos/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> addEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("{EmpId}")
    public ResponseEntity<EmployeeDto> getEmployee(@PathVariable("EmpId") long EmpId) {
        EmployeeDto savedEmployee = employeeService.getEmployeeById(EmpId);
        return ResponseEntity.ok(savedEmployee);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employeesList = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeesList);
    }

    @PutMapping("{EmpId}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("EmpId") long EmpId, @RequestBody EmployeeDto employeeDto) {
        EmployeeDto updatedEmployee = employeeService.updateEmployee(EmpId, employeeDto);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("{EmpId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("EmpId") long EmpId) {
        employeeService.deleteEmployee(EmpId);
        return ResponseEntity.ok("Employee deleted with success !");
    }
}
