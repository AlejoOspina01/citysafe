'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

/**
 * Report Incident Page (/report)
 * Multi-step form to report community incidents
 * Step 1: User Information
 * Step 2: Incident Details
 * Includes map simulation and optional photo upload
 */
export default function ReportIncident() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  const [incidentData, setIncidentData] = useState({
    type: '',
    date: '',
    time: '',
    location: '',
    latitude: '40.7128',
    longitude: '-74.0060',
    description: '',
  });

  const incidentTypes = [
    'Theft',
    'Vandalism',
    'Suspicious Activity',
    'Traffic Accident',
    'Noise Complaint',
    'Property Damage',
    'Assault',
    'Other',
  ];

  const handleUserInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIncidentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setIncidentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setIncidentData((prev) => ({
      ...prev,
      type: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log('Incident Report:', {
      ...userInfo,
      ...incidentData,
    });
    setIsSubmitted(true);
  };

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-700 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Report an Incident
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help us keep the community safe by reporting suspicious activity or incidents.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Report Submitted Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for helping us keep the community safe. Your incident report
                  has been received and will be reviewed by our team.
                </p>
                <p className="text-sm text-gray-500 mb-8">
                  Report ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <Button
                  onClick={() => {
                    setCurrentStep(1);
                    setIsSubmitted(false);
                    setUserInfo({ name: '', email: '' });
                    setIncidentData({
                      type: '',
                      date: '',
                      time: '',
                      location: '',
                      latitude: '40.7128',
                      longitude: '-74.0060',
                      description: '',
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Submit Another Report
                </Button>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white ${
                        currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      1
                    </div>
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-white ${
                        currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      2
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>Your Information</span>
                    <span>Incident Details</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: User Information */}
                  {currentStep === 1 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div>
                        <Label htmlFor="name" className="font-medium text-gray-900">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={userInfo.name}
                          onChange={handleUserInfoChange}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="font-medium text-gray-900">
                          Email (Optional)
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={userInfo.email}
                          onChange={handleUserInfoChange}
                          className="mt-2"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Provide your email to receive updates about your report.
                        </p>
                      </div>

                      <div className="flex justify-end pt-4">
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          disabled={!userInfo.name}
                          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                        >
                          Next <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Incident Details */}
                  {currentStep === 2 && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div>
                        <Label htmlFor="type" className="font-medium text-gray-900">
                          Incident Type *
                        </Label>
                        <Select value={incidentData.type} onValueChange={handleSelectChange}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select incident type" />
                          </SelectTrigger>
                          <SelectContent>
                            {incidentTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="date" className="font-medium text-gray-900">
                            Date *
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            required
                            value={incidentData.date}
                            onChange={handleIncidentChange}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="time" className="font-medium text-gray-900">
                            Time *
                          </Label>
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            required
                            value={incidentData.time}
                            onChange={handleIncidentChange}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="location" className="font-medium text-gray-900">
                          Location *
                        </Label>
                        <Input
                          id="location"
                          name="location"
                          type="text"
                          required
                          placeholder="Street address or location name"
                          value={incidentData.location}
                          onChange={handleIncidentChange}
                          className="mt-2"
                        />
                      </div>

                      {/* Map Simulation */}
                      <div>
                        <Label className="font-medium text-gray-900 block mb-2">
                          Location on Map (Simulated)
                        </Label>
                        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                          <div className="text-center text-gray-600">
                            <p className="font-medium">📍 Simulated Map</p>
                            <p className="text-sm mt-2">
                              Latitude: {incidentData.latitude}
                            </p>
                            <p className="text-sm">
                              Longitude: {incidentData.longitude}
                            </p>
                            <p className="text-xs mt-2 text-gray-500">
                              In production, this would show an interactive map
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description" className="font-medium text-gray-900">
                          Description *
                        </Label>
                        <Textarea
                          id="description"
                          name="description"
                          required
                          placeholder="Describe what happened in detail..."
                          rows={5}
                          value={incidentData.description}
                          onChange={handleIncidentChange}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label className="font-medium text-gray-900 block mb-2">
                          Photos (Optional)
                        </Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="hidden"
                            id="photos"
                          />
                          <label
                            htmlFor="photos"
                            className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Click to upload photos
                          </label>
                          <p className="text-sm text-gray-500 mt-1">
                            or drag and drop
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(1)}
                          className="flex items-center gap-2 border-gray-300"
                        >
                          <ArrowLeft className="h-4 w-4" /> Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={
                            !incidentData.type ||
                            !incidentData.date ||
                            !incidentData.time ||
                            !incidentData.location ||
                            !incidentData.description
                          }
                          className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                        >
                          Submit Report <Check className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
