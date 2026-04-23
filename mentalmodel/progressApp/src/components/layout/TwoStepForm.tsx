import { useState } from "react";
import type { FormType } from "../../types/types";

const TwoStepForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormType>({ email: "", password: "" });
	const [submittedData, setSubmittedData] = useState<FormType | undefined>(undefined);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const email = e.target.value
		setFormData(prev => ({...prev,email}))
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const password = e.target.value
		setFormData(prev => ({...prev,password}))
	}

	const goToNextStep = () => {
		if(currentStep === 1 && formData.email !== ""){
			setCurrentStep(2)
		}
	}
	
	const goToPreviousStep = () => {
		if(currentStep === 2){
			setCurrentStep(1)
		}
	}

	const handleSubmit = () => {
		if(formData.email !== "" && formData.password !== ""){
			setSubmittedData(formData)
			setCurrentStep(3)
		}
	};

	const resetSubmission = () => {
		setCurrentStep(1)
		setFormData({ email: "", password: ""})
		setSubmittedData(undefined)
	}

	return (
		<div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
		{/* Display submitted data if available */}
		{submittedData && (
			<div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
			<h3 className="text-lg font-bold text-green-800 mb-2">
				Form Submitted Successfully!
			</h3>
			<div className="text-green-700">
				<p>
				<strong>Email:</strong> {submittedData.email}
				</p>
				<p>
				<strong>Password:</strong> {submittedData.password}
				</p>
			</div>
			<button
				onClick={resetSubmission}
				className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
			>
				Fill Form Again
			</button>
			</div>
		)}

		{/* Step 1: Email */}
		{currentStep === 1 && (
			<div>
			<h2 className="text-2xl font-bold text-gray-800 mb-6">
				Step 1. Provide email
			</h2>

			<div className="mb-6">
				<label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700 mb-2"
				>
				Email Address
				</label>
				<input
				type="email"
				id="email"
				value={formData.email}
				onChange={handleEmailChange}
				placeholder="Enter your email"
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<button
				onClick={goToNextStep}
				className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
			>
				Next Step
			</button>
			</div>
		)}

		{/* Step 2: Password */}
		{currentStep === 2 && (
			<div>
			<h2 className="text-2xl font-bold text-gray-800 mb-6">
				Step 2. Provide password
			</h2>

			<div className="mb-6">
				<label
				htmlFor="password"
				className="block text-sm font-medium text-gray-700 mb-2"
				>
				Password
				</label>
				<input
				type="password"
				id="password"
				value={formData.password}
				onChange={handlePasswordChange}
				placeholder="Enter your password"
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<div className="flex gap-3">
				<button
				onClick={goToPreviousStep}
				className="flex-1 px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
				>
				Previous Step
				</button>

				<button
				onClick={handleSubmit}
				className="flex-1 px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
				>
				Submit Form
				</button>
			</div>
			</div>
		)}

		{/* Step indicator */}
		<div className="mt-6 flex justify-center">
			<div className="flex space-x-2">
			<div
				className={`w-3 h-3 rounded-full ${
				currentStep === 1 ? "bg-blue-600" : "bg-gray-300"
				}`}
			></div>
			<div
				className={`w-3 h-3 rounded-full ${
				currentStep === 2 ? "bg-blue-600" : "bg-gray-300"
				}`}
			></div>
			</div>
		</div>
		</div>
	);
};

export default TwoStepForm;