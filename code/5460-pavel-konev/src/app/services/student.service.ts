import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.model';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private apiUrl = 'https://localhost:3000';

    constructor(private http: HttpClient) {}

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.apiUrl}/students`);
    }

    getStudentById(id: number): Observable<Student> {
        return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
    }

    createStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(`${this.apiUrl}/students`, student);
    }

    updateStudent(id: number, student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.apiUrl}/students/${id}`, student);
    }

    deleteStudent(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/students/${id}`);
    }
  }
