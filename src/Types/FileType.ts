import { Key } from "react";


export interface IFile {
  _id: Key | null | undefined;
  uploadedBy: string;
  fileName: string;
  fileDescription: string;
  type: "question" | "note" | "lecture";
  fileUrl: string;
    courseId: string; // Ensure courseId is of type ObjectId
  courseName: string;
  fileSize: number;
  fileType: string;
  
}
