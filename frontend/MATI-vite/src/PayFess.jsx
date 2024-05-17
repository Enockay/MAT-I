import React, { useState, useEffect } from 'react';
import './App.css'; // Stylesheet for component

const PayFees = () => {
    // State variables
    const [admissionNumber, setAdmissionNumber] = useState('');
    const [student, setStudent] = useState(null);
    const [balance, setBalance] = useState(0);
    const [levi, setLevi] = useState('');
    const [amountPaid, setAmountPaid] = useState(0);
    const [updatedStudent, setUpdatedStudent] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    // Function to handle input change for admission number
    const handleAdmissionNumberChange = (e) => {
        setAdmissionNumber(e.target.value);
    };

    // Function to fetch student data based on admission number
    const fetchStudentData = () => {
        // Implement your fetch logic here to get student data from backend using admissionNumber
        // For now, simulate student data with dummy data
        const dummyStudentData = {
            fullName: 'John Doe',
            fees: {
                tuition: 5000,
                uniform: 1000,
                lunch: 500,
                total: 6500,
                balance: 2500,
            },
        };
        setStudent(dummyStudentData);
        setBalance(dummyStudentData.fees.balance);
    };

   /** const fetchStudentData = async () => {
        try {
            const response = await fetch(`your-backend-api-url/${admissionNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch student data');
            }
            const data = await response.json();
            setStudent(data.student);
            setBalance(data.balance);
        } catch (error) {
            console.error('Error fetching student data:', error.message);
            setStudent(null);
            setBalance(0);
            setResponseMessage('Error fetching student data');
        }
    };
**/
    // Function to handle select change for levi
    const handleLeviChange = (e) => {
        setLevi(e.target.value);
    };

    // Function to handle input change for amount paid
    const handleAmountPaidChange = (e) => {
        setAmountPaid(parseFloat(e.target.value));
    };

    // Function to handle payment submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your payment logic here
        // For now, simulate updating student data with dummy data
        const updatedBalance = balance - amountPaid;
        const updatedStudentData = {
            ...student,
            fees: {
                ...student.fees,
                balance: updatedBalance,
            },
        };
        setUpdatedStudent(updatedStudentData);
        setResponseMessage('Payment successful!');
    };

    return (
        <div className="pay-fees-container">
            <h2>Pay Student Fees</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Admission Number:</label>
                    <input type="text" value={admissionNumber} onChange={handleAdmissionNumberChange} />
                    <button type="button" onClick={fetchStudentData}>Show Balance</button>
                </div>
                {student && (
                    <>
                        <div className="student-details">
                            <h3>{student.fullName}</h3>
                            <p>Tuition Fees: ${student.fees.tuition}</p>
                            <p>Uniform Fees: ${student.fees.uniform}</p>
                            <p>Lunch Fees: ${student.fees.lunch}</p>
                            <p>Total Fees: ${student.fees.total}</p>
                            <p>Balance: ${balance}</p>
                        </div>
                        <div className="payment-details">
                            <div className="form-group">
                                <label>Select Levi:</label>
                                <select value={levi} onChange={handleLeviChange}>
                                    <option value="">Select Levi</option>
                                    <option value="tuition">Tuition</option>
                                    <option value="uniform">Uniform</option>
                                    <option value="lunch">Lunch</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Amount Paid:</label>
                                <input type="number" value={amountPaid} onChange={handleAmountPaidChange} />
                            </div>
                            <button type="submit">Submit Payment</button>
                        </div>
                    </>
                )}
            </form>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
            {updatedStudent && (
                <div className="updated-student">
                    <h3>Updated Student Details</h3>
                    <p>Name: {updatedStudent.fullName}</p>
                    <p>Balance: ${updatedStudent.fees.balance}</p>
                </div>
            )}
        </div>
    );
};

export default PayFees;
