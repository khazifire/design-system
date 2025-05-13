'use client'

import {
  LucideAlertCircle,
  LucideCheck,
  LucideUser,
  LucideMail,
  LucidePhone,
  LucideLock,
  LucideCalendar,
  LucideArrowRight,
  LucideEye,
  LucideEyeOff,
  LucideDollarSign,
  LucideInfo,
} from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "../ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Switch } from "../ui/switch"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"
import { Progress } from "../ui/progress"

export default function FormsDemo() {
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordValue, setPasswordValue] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("monthly")
  const [receiveEmails, setReceiveEmails] = useState(true)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPasswordValue(value)
    
    // Simple password strength calculation
    let strength = 0
    if (value.length > 0) strength += 20
    if (value.length > 7) strength += 20
    if (/[A-Z]/.test(value)) strength += 20
    if (/[0-9]/.test(value)) strength += 20
    if (/[^A-Za-z0-9]/.test(value)) strength += 20
    
    setPasswordStrength(strength)
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-12">
      <div>
        <h1 className="text-3xl font-bold">Form Components</h1>
        <p className="text-muted-foreground mt-2">A showcase of various form elements styled with our design system</p>
      </div>

      {/* Basic Registration Form */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Registration Form</h2>
          <p className="text-muted-foreground mt-1">Demonstrates inputs, validation, and basic form layout</p>
        </div>

        <div className="card card-gradient">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <div className="input-group">
                  <div className="input-group-text">
                    <LucideUser className="h-4 w-4" />
                  </div>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <div className="input-group">
                  <div className="input-group-text">
                    <LucideUser className="h-4 w-4" />
                  </div>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <div className="input-group-text">
                  <LucideMail className="h-4 w-4" />
                </div>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">We'll never share your email with anyone else.</p>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <div className="input-group-text">
                  <LucideLock className="h-4 w-4" />
                </div>
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />
                <button 
                  type="button" 
                  className="input-group-text cursor-pointer" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <LucideEyeOff className="h-4 w-4" /> : <LucideEye className="h-4 w-4" />}
                </button>
              </div>
              
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-xs">
                  <span>Password Strength</span>
                  <span className={
                    passwordStrength < 40 ? "text-error" : 
                    passwordStrength < 80 ? "text-warning" : 
                    "text-success"
                  }>
                    {passwordStrength < 40 ? "Weak" : 
                     passwordStrength < 80 ? "Medium" : 
                     "Strong"}
                  </span>
                </div>
                <Progress value={passwordStrength} 
                  variant={
                    passwordStrength < 40 ? "error" : 
                    passwordStrength < 80 ? "warning" : 
                    "success"
                  } 
                  size="sm" 
                />
              </div>
            </div>

            <div className="form-group">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="terms" 
                  checked={acceptTerms}
                  onCheckedChange={(checked) => {
                    setAcceptTerms(checked as boolean)
                  }}
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>

            <button className="btn-primary-gradient w-full flex items-center justify-center gap-2">
              <span>Create Account</span>
              <LucideArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Advanced Form Elements */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold">Advanced Form Controls</h2>
          <p className="text-muted-foreground mt-1">Radio groups, switches, OTP inputs, and more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Subscription Plan</h3>
            
            <RadioGroup 
              value={selectedPlan} 
              onValueChange={setSelectedPlan} 
              className="space-y-3"
            >
              <div className={`border p-4 rounded-md transition-all ${selectedPlan === "monthly" ? "border-primary bg-primary-light/30" : "border-neutral"}`}>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <div className="flex-1">
                    <label htmlFor="monthly" className="font-medium">Monthly Plan</label>
                    <p className="text-sm text-muted-foreground">$9.99 per month</p>
                  </div>
                  <div className="badge badge-primary">Popular</div>
                </div>
              </div>
              
              <div className={`border p-4 rounded-md transition-all ${selectedPlan === "yearly" ? "border-primary bg-primary-light/30" : "border-neutral"}`}>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yearly" id="yearly" />
                  <div className="flex-1">
                    <label htmlFor="yearly" className="font-medium">Yearly Plan</label>
                    <p className="text-sm text-muted-foreground">$99.99 per year (Save 17%)</p>
                  </div>
                </div>
              </div>
              
              <div className={`border p-4 rounded-md transition-all ${selectedPlan === "lifetime" ? "border-primary bg-primary-light/30" : "border-neutral"}`}>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="lifetime" id="lifetime" />
                  <div className="flex-1">
                    <label htmlFor="lifetime" className="font-medium">Lifetime Access</label>
                    <p className="text-sm text-muted-foreground">$299.99 one-time payment</p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium mb-4">Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="email-notifications" className="font-medium">Email Notifications</label>
                  <p className="text-sm text-muted-foreground">Receive updates about your account</p>
                </div>
                <Switch 
                  id="email-notifications"
                  checked={receiveEmails}
                  onCheckedChange={setReceiveEmails}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="dark-mode" className="font-medium">Dark Mode</label>
                  <p className="text-sm text-muted-foreground">Use dark theme across the application</p>
                </div>
                <Switch id="dark-mode" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="two-factor" className="font-medium">Two-Factor Authentication</label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch id="two-factor" />
              </div>
            </div>
          </div>
        </div>

        {/* OTP Input & Message Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-medium mb-4">Verification Code</h3>
            <p className="text-sm text-muted-foreground mb-6">Enter the 6-digit code sent to your phone</p>
            
            <div className="mb-6">
              <InputOTP maxLength={6} className="justify-center gap-2">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <div className="flex items-center justify-between">
              <button className="text-primary text-sm hover:underline">Resend Code</button>
              <button className="btn-primary">Verify</button>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium mb-4">Contact Message</h3>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <Input id="subject" placeholder="Enter message subject" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Textarea 
                id="message" 
                placeholder="Type your message here..." 
                rows={5}
                className="resize-none"
              />
            </div>
            
            <div className="flex justify-end">
              <button className="btn-primary">Send Message</button>
            </div>
          </div>
        </div>

        {/* Complex Form With Validation */}
        <div className="card">
          <h3 className="text-lg font-medium mb-4">Payment Information</h3>
          
          <form className="space-y-6">
            <div className="form-group">
              <label htmlFor="card-name">Name on Card</label>
              <Input id="card-name" placeholder="Enter name as it appears on card" />
            </div>
            
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <div className="input-group">
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
                <div className="input-group-text">
                  <img src="https://placehold.co/40x25" alt="Card" className="h-5 w-auto" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="form-group">
                <label htmlFor="expiry-date">Expiry Date</label>
                <div className="input-group">
                  <div className="input-group-text">
                    <LucideCalendar className="h-4 w-4" />
                  </div>
                  <Input id="expiry-date" placeholder="MM / YY" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="cvv">
                  <span className="flex items-center gap-1">
                    CVV
                    <div className="tooltip">
                      <LucideInfo className="h-4 w-4 text-muted-foreground cursor-help" />
                      <span className="tooltip-text">The 3 or 4 digit code on your card</span>
                    </div>
                  </span>
                </label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <div className="input-group">
                <div className="input-group-text">
                  <LucideDollarSign className="h-4 w-4" />
                </div>
                <Input id="amount" placeholder="0.00" />
              </div>
            </div>

            <div className="border rounded-md p-4 bg-info/5 flex gap-3">
              <LucideInfo className="h-5 w-5 text-info shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-muted-foreground">Your payment information is encrypted and secure. We never store your full card details.</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="btn-primary">Complete Payment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 