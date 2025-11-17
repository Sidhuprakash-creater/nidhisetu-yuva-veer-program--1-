import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';
import { addAmbassador } from '../firebase';

interface FormData {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  college: string;
  city: string;
  reason: string;
}

interface FormErrors {
  fullName?: string;
  age?: string;
  email?: string;
  phone?: string;
  college?: string;
  city?: string;
  reason?: string;
  terms?: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    college: '',
    city: '',
    reason: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const termsItems = [
    { title: 'Active Participation', text: 'Ambassadors must actively share NidhiSetu updates, information, and awareness among students.' },
    { title: 'Genuine Promotions Only', text: 'Only real interactions and genuine promotions are allowed. Any false or misleading activity may lead to removal from the program.' },
    { title: 'Monthly Evaluation', text: 'Ambassador performance will be reviewed every month. Top performers are selected based on activeness, consistency, and engagement.' },
    { title: 'Rewards Depend on Performance', text: 'Gifts and rewards are given based on monthly ranking and overall activity.' },
    { title: 'Professional Conduct', text: 'Ambassadors must maintain respectful behavior and avoid spreading misinformation or negative statements about NidhiSetu.' },
    { title: 'Proper Use of Brand Name', text: 'The NidhiSetu brand name, logo, and materials must not be misused for personal promotion or unrelated activities.' },
    { title: 'Responsible Social Media Sharing', text: 'Ambassadors may share NidhiSetu content on social platforms but must avoid posting misleading or unapproved claims.' },
    { title: 'Right to Removal', text: 'NidhiSetu reserves the right to remove any ambassador who is inactive or violates program guidelines.' },
    { title: 'Consent for Communication', text: 'By registering, ambassadors agree that NidhiSetu may contact them via email or phone for updates and program-related information.' },
    { title: 'Voluntary Participation', text: 'The Ambassador Program is voluntary and does not establish any employment or contractual relationship with NidhiSetu.' },
  ];
  const [termsChecked, setTermsChecked] = useState<boolean[]>(Array(termsItems.length).fill(false));
  const allTermsChecked = termsChecked.every(Boolean);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.age) {
        newErrors.age = 'Age is required.';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 16 || Number(formData.age) > 24) {
        newErrors.age = 'Age must be a number between 16 and 24.';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.phone) {
        newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!formData.college.trim()) newErrors.college = 'College/School Name is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.reason.trim() || formData.reason.length < 20) {
        newErrors.reason = 'Please tell us more (at least 20 characters).';
    }
    if (!allTermsChecked) {
        newErrors.terms = 'Please accept all Terms & Conditions to proceed.';
    }
    return newErrors;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await addAmbassador({
            ...formData,
            age: Number(formData.age),
            submittedAt: new Date(),
            termsAgreed: true,
        });
        setIsSuccess(true);
        // Reset form
        setFormData({
            fullName: '', age: '', email: '', phone: '', college: '', city: '', reason: ''
        });
        setTermsChecked(Array(termsItems.length).fill(false));
      } catch (error) {
          console.error("Failed to submit application:", error);
          alert("There was an error submitting your application. Please check the console and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const closeSuccessModal = () => {
      setIsSuccess(false);
  }

  return (
    <>
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-dark-teal text-center">Ambassador Registration</h1>
                <p className="text-gray-600 mt-2 text-center">Join our mission to spread financial literacy.</p>
                <div className="mt-10 bg-gray-50 p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        {/* Age */}
                        <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                        </div>
                        {/* Email */}
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        {/* Phone Number */}
                        <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        {/* College/School Name */}
                        <div className="md:col-span-2">
                        <label htmlFor="college" className="block text-sm font-medium text-gray-700">College / School Name</label>
                        <input type="text" name="college" id="college" value={formData.college} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.college ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
                        </div>
                        {/* City */}
                        <div className="md:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        {/* Reason to Join */}
                    <div className="md:col-span-2">
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Why do you want to join?</label>
                        <textarea name="reason" id="reason" rows={4} value={formData.reason} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.reason ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`}></textarea>
                        {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
                    </div>
                    <div className="md:col-span-2 mt-6">
                        <h4 className="text-lg font-bold text-dark-teal">Terms & Conditions</h4>
                        <div className="mt-3 space-y-3">
                            {termsItems.map((t, i) => (
                                <label key={i} className="flex items-start">
                                    <input
                                        type="checkbox"
                                        checked={termsChecked[i]}
                                        onChange={() => {
                                            setTermsChecked(prev => {
                                                const next = [...prev];
                                                next[i] = !next[i];
                                                return next;
                                            });
                                        }}
                                        className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-gold focus:ring-gold hover:shadow-[0_0_16px_rgba(212,175,55,0.45)]"
                                    />
                                    <span>
                                        <span className="font-medium text-gray-800">{t.title}</span>
                                        <span className="block text-gray-600 text-sm">{t.text}</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                        {errors.terms && <p className="text-red-500 text-xs mt-2">{errors.terms}</p>}
                        {!allTermsChecked && <p className="text-gray-600 text-xs mt-2">Select all checkboxes to enable submission.</p>}
                    </div>
                    </div>
                    <div className="mt-8">
                        <button type="submit" disabled={isSubmitting || !allTermsChecked} className="w-full bg-dark-teal text-white font-bold py-3 px-4 rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-teal disabled:bg-gray-400 transition-colors duration-300 hover:-translate-y-0.5 hover:shadow-lg transition-transform">
                         {isSubmitting ? 'Submitting...' : 'Submit Application'}
                         </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <SuccessModal isOpen={isSuccess} onClose={closeSuccessModal} />
    </>
  );
};

export default RegistrationPage;