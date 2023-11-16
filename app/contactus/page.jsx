"use client";

import { SnackbarProvider } from "notistack";
import React from "react";
import ContactForm from "./contactform";

const Contact = () => {
  return (
    <SnackbarProvider>
      <ContactForm />
    </SnackbarProvider>
  );
};

export default Contact;
