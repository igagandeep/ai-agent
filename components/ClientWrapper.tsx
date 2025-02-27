"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!schematicPubKey) {
    throw new Error(
      "No Schematic Publishable Key found. Please add it to your .env.local file."
    );
  }


  const clerkAppearance = {
    variables: {
      colorPrimary: "#f87171",      
      colorText: "#1f2937",         
      colorTextSecondary: "#4b5563",
      colorBackground: "#ffffff",   
      colorInputBackground: "#f9fafb", // Gray-50
      borderRadius: "0.375rem",     // Rounded-md (6px)
    },
    elements: {
      card: { boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
      socialButtonsProviderIcon: { filter: "none" },
    }
  };

  return (
    <ClerkProvider appearance={clerkAppearance}>
      <SchematicProvider publishableKey={schematicPubKey}>
        <SchematicWrapped>{children}</SchematicWrapped>
      </SchematicProvider>
    </ClerkProvider>
  );
}
