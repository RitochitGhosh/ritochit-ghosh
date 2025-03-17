"use client"

import React from 'react';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Link from 'next/link';
import { Cover } from '@/components/ui/cover';
import { FlipWords } from '@/components/ui/flip-words';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      form.reset();
    } catch (error) {
      console.log(error);      
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const words = ["amazing", "impactful", "exciting", "innovative"];


  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-white to-gray-50/50 px-4 py-16 md:px-8 lg:px-24">
      <nav className="w-full max-w-4xl text-sm text-gray-600 mb-16">
        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/contact" className="text-gray-900 font-medium">Contact</Link>
      </nav>
      
      <div className="w-full max-w-4xl space-y-12">
        {/* Header Section */}
        <div className="space-y-6 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Let&apos;s <Cover className="inline-block cursor-pointer">Create</Cover> Something Together
          </h1>
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Have an<FlipWords words={words} />project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can help bring your ideas to life.
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-6 md:p-8 lg:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="h-12 border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email" 
                          {...field} 
                          className="h-12 border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="What's this about?" 
                        {...field} 
                        className="h-12 border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[150px] border-gray-200 focus:border-gray-400 focus:ring-gray-400 resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col items-start space-y-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 h-12 bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {submitStatus.type && (
                  <p className={`text-sm font-medium ${
                    submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {submitStatus.message}
                  </p>
                )}

              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 