import { Routes, Route, Link } from 'react-router-dom';
import './App.css'; 
import Interview from './interview';
import { useState } from 'react';

function Prompt() {
    
    const [jobDescription, setJobDescription] = useState('');
    const [showJobDescription, setShowJobDescription] = useState(false);
    const [role, setRole] = useState('');
    const [interviewType, setInterviewType] = useState('');

    //check if form is valid so we can enable the button
    const isFormValid = role.trim() !== '' && interviewType !== '';

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <header className="bg-white shadow-sm">
                        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
                            <img src="/icon.webp" alt="Logo" className="h-20 w-20"/>
                            <h1 className="text-2xl font-bold text-gray-900">Interview Coach</h1>
                        </div>
                    </header>
                    <section className='bg-gradient-to-br from-orange-50 to-orange-100 py-20'>
                        <div className="max-w-2xl mx-auto px-6">
                            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Practice Your Interview</h1>
                            
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="mb-6">
                                    <label className="block text-lg font-semibold text-gray-900 mb-3">
                                        Select Interview Type <span className="text-red-500">*</span>
                                    </label>
                                    <select 
                                        value={interviewType}
                                        onChange={(e) => setInterviewType(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="">Choose an option...</option>
                                        <option value="technical">Technical</option>
                                        <option value="behavioral">Behavioral</option>
                                        <option value="both">Both</option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-semibold mb-2">
                                        What role are you interviewing for? <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        placeholder="e.g Software Engineer"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="mb-8">
                                    <button
                                        onClick={() => setShowJobDescription(!showJobDescription)}
                                        className="font-medium text-sm mb-2 flex items-center gap-1">
                                        {showJobDescription ? '−' : '+'} Add job description (optional)
                                    </button>
                                    
                                    {showJobDescription && (
                                        <div className="mt-3">
                                            <textarea
                                                placeholder="Paste the job description here to get more tailored questions..."
                                                value={jobDescription}
                                                onChange={(e) => setJobDescription(e.target.value)}
                                                rows="6"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="text-center">
                                    <Link 
                                        to={isFormValid ? "/interview" : "#"}
                                        onClick={(e) => {
                                            if (!isFormValid) {
                                                e.preventDefault();
                                            }
                                        }}
                                        className={`font-semibold px-8 py-4 rounded-lg shadow-lg transition-all inline-flex items-center gap-2 ${
                                            isFormValid 
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}>
                                        <img src="/star.png" alt="" className="h-6 w-6"/>
                                        Start Practice
                                    </Link>
                                    
                                    {!isFormValid && (
                                        <p className="text-sm text-red-500 mt-3">
                                            Please fill in all field
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }/>
            <Route path="/interview" element={<Interview />} />
        </Routes>
    );
}

export default Prompt;