import { PrismaErrorType } from "@/types";

export const ErrorMessages = {
  [PrismaErrorType.EMAIL_ALREADY_EXISTS]: {
    status: 409,
    message:
      "The provided email is already in use. Please choose a different email.",
  },
  [PrismaErrorType.UNKNOWN_ERROR]: {
    status: 500,
    message: "An unknown error occurred. Please try again later.",
  },
};
