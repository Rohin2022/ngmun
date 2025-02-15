"use client";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Delegate {
  name: string;
  grade: string;
  experience: string;
}

export default function Register() {
  const [formData, setFormData] = useState({
    schoolName: "",
    delegationSize: "",
    advisorName: "",
    advisorEmail: "",
    advisorPhone: "",
  });

  const [delegates, setDelegates] = useState<Delegate[]>([]);
  const [showDelegateForm, setShowDelegateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const removeDelegate = (index: number) => {
    const newDelegates = [...delegates];
    newDelegates.splice(index, 1);
    setDelegates(newDelegates);
  };

  const validateForm = () => {
    // Check school info
    if (!formData.schoolName.trim()) {
      alert("Please enter the school name");
      return false;
    }

    if (!formData.delegationSize) {
      alert("Please select a delegation size");
      return false;
    }

    // Check advisor info
    if (!formData.advisorName.trim()) {
      alert("Please enter the advisor name");
      return false;
    }

    if (!formData.advisorEmail.trim()) {
      alert("Please enter the advisor email");
      return false;
    }

    if (!formData.advisorPhone.trim()) {
      alert("Please enter the advisor phone number");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.advisorEmail)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Check delegate info
    if (delegates.length === 0) {
      alert("Please add at least one delegate");
      return false;
    }

    // Check each delegate's information
    for (let i = 0; i < delegates.length; i++) {
      const delegate = delegates[i];
      if (!delegate.name.trim()) {
        alert(`Please enter the name for Delegate ${i + 1}`);
        return false;
      }
      if (!delegate.grade) {
        alert(`Please select the grade for Delegate ${i + 1}`);
        return false;
      }
      if (!delegate.experience) {
        alert(`Please select the experience level for Delegate ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Replace YOUR_GOOGLE_SCRIPT_URL with the URL you got from deployment
      const response = await fetch('https://script.google.com/macros/s/AKfycbzFubN72rdWNp3_eYDq4uhtDV_cg_ZzSGb3tr7Xk4gZlgvKJ1GwKb9q1DGPyqu4sFw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',  // Changed from application/json
        },
        body: JSON.stringify({
          ...formData,
          delegates,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Registration submitted successfully!');
        // Reset form
        setFormData({
          schoolName: "",
          delegationSize: "",
          advisorName: "",
          advisorEmail: "",
          advisorPhone: "",
        });
        setDelegates([]);
        setShowDelegateForm(false);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      alert('Error submitting registration. Please try again or contact us at ngmun@nobles.edu');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelegationSizeChange = (value: string) => {
    setFormData({ ...formData, delegationSize: value });
    const size =
        value === "small"
            ? 5
            : value === "medium"
                ? 10
                : value === "large"
                    ? 15
                    : 20;
    setDelegates(Array(size).fill({ name: "", grade: "", experience: "" }));
    setShowDelegateForm(true);
  };

  const updateDelegate = (
      index: number,
      field: keyof Delegate,
      value: string
  ) => {
    const newDelegates = [...delegates];
    newDelegates[index] = { ...newDelegates[index], [field]: value };
    setDelegates(newDelegates);
  };

  return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        {/* Hero section with parallax */}
        <div className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-800/20 z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-20"></div>

          <div className="absolute inset-0">
            <Image
                src={`${basePath}/registrationBg.jpg`}
                alt="Registration Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
          </div>

          <div className="relative z-30 text-center px-4">
            <h1 className="text-white font-bold mb-4">
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in-down">
              Register for NGMUN VII
            </span>
            </h1>
            <p className="text-white text-base md:text-lg animate-fade-in">
              Join us for an unforgettable conference experience
            </p>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="relative z-40 py-12 px-4 md:px-0 max-w-3xl">
          <div className="max-w-3xl mx-auto">
            <Card className="backdrop-blur-sm bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle>Conference Registration</CardTitle>
                <CardDescription>
                  Please fill out all required information for your delegation.
                  For any questions, please contact{" "}
                  <Link
                      href="mailto:ngmun@nobles.edu"
                      className="text-[#4A90E2] hover:underline"
                  >
                    ngmun@nobles.edu
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* School Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      School Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          School Name*
                        </label>
                        <Input
                            placeholder="Enter school name"
                            className="w-full"
                            required
                            value={formData.schoolName}
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  schoolName: e.target.value,
                                })
                            }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Delegation Size*
                        </label>
                        <Select onValueChange={handleDelegationSizeChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">1-5 delegates</SelectItem>
                            <SelectItem value="medium">6-10 delegates</SelectItem>
                            <SelectItem value="large">11-15 delegates</SelectItem>
                            <SelectItem value="xlarge">16+ delegates</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Advisor Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Faculty Advisor Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Advisor Name*
                        </label>
                        <Input
                            placeholder="Enter advisor name"
                            className="w-full"
                            required
                            value={formData.advisorName}
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  advisorName: e.target.value,
                                })
                            }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Advisor Email*
                        </label>
                        <Input
                            type="email"
                            placeholder="advisor@school.edu"
                            className="w-full"
                            required
                            value={formData.advisorEmail}
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  advisorEmail: e.target.value,
                                })
                            }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Advisor Phone*
                        </label>
                        <Input
                            type="tel"
                            placeholder="(123) 456-7890"
                            className="w-full"
                            required
                            value={formData.advisorPhone}
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  advisorPhone: e.target.value,
                                })
                            }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Delegate Information */}
                  {showDelegateForm && (
                      <>
                        <Separator />
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Delegate Information
                          </h3>
                          {delegates.map((delegate, index) => (
                              <Card key={index} className="p-4 relative">
                                <div className="flex w-full justify-between items-center mb-6">
                                  <h4 className="font-medium">
                                    Delegate {index + 1}
                                  </h4>
                                  <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => removeDelegate(index)}
                                      className="absolute top-2 right-2 hover:bg-red-50"
                                  >
                                    <X className="h-5 w-5 text-red-500" />
                                  </Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                      Name*
                                    </label>
                                    <Input
                                        placeholder="Delegate name"
                                        value={delegate.name}
                                        required
                                        onChange={(e) =>
                                            updateDelegate(index, "name", e.target.value)
                                        }
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                      Grade*
                                    </label>
                                    <Select
                                        required
                                        onValueChange={(value) =>
                                            updateDelegate(index, "grade", value)
                                        }
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select grade" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="6">6th Grade</SelectItem>
                                        <SelectItem value="7">7th Grade</SelectItem>
                                        <SelectItem value="8">8th Grade</SelectItem>
                                        <SelectItem value="9">9th Grade</SelectItem>
                                        <SelectItem value="10">10th Grade</SelectItem>
                                        <SelectItem value="11">11th Grade</SelectItem>
                                        <SelectItem value="12">12th Grade</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">
                                      Experience Level*
                                    </label>
                                    <Select
                                        required
                                        onValueChange={(value) =>
                                            updateDelegate(index, "experience", value)
                                        }
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select experience" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="novice">
                                          Novice (0-1 conferences)
                                        </SelectItem>
                                        <SelectItem value="intermediate">
                                          Intermediate (2-4 conferences)
                                        </SelectItem>
                                        <SelectItem value="advanced">
                                          Advanced (5+ conferences)
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              </Card>
                          ))}
                        </div>
                      </>
                  )}

                  <div className="pt-6">
                    <Button
                        type="submit"
                        className="w-full bg-[#4A90E2] hover:bg-[#357ABD] text-white transition-colors duration-200"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information Card */}
            <Card className="mt-6 backdrop-blur-sm bg-white/90 shadow-lg">
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>• Registration fee is $30 per delegate</p>
                  <p>• Final registration deadline is April 15, 2025</p>
                  <p className="pt-4">
                    For any additional questions, please contact{" "}
                    <Link
                        href="mailto:ngmun@nobles.edu"
                        className="text-[#4A90E2] hover:underline"
                    >
                      ngmun@nobles.edu
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
  );
}