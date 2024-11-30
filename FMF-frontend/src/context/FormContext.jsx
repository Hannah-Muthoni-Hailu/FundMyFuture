/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import Login from '../components/Auth/Login';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        login: {
            email: '',
            password: '',
        },
        step1: {
            firstName: '',
            lastName: '',
            password1: '',
            password2: '',
            phoneNumber: '',
            email: '',
        },
        step2: {
            role: '',
            fullName: '',
            dateOfBirth: '',
            gender: '',
            educationLevel: '',
            areaOfStudy: '',
            organization: '',
            fundingCauses: '',
            professionalField: '',
            yearsOfExperience: '',
            mentorshipAreas: '',
            profilePicture: null,
        },
        step3: {
            monthlyIncome: '',
            fundingGap: '',
            savingsGoal: '',
            bankDetails: '',
            fundingRange: '',
            fundingFrequency: '',
            provideFinancialDetails: true,
        },
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};