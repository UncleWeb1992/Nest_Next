import { LoginForm } from "@/app/components/ui/auth/LoginForm";
import { RegisterFrm } from "@/app/components/ui/auth/RegisterForm";
import { ReactNode } from "react";

interface Tab {
  label: string;
  key: string;
  children: ReactNode;
}

export const AuthTabs: Tab[] = [
  {
    label: "Login",
    key: "1",
    children: <LoginForm />,
  },
  {
    label: "Register",
    key: "2",
    children: <RegisterFrm />,
  },
];
