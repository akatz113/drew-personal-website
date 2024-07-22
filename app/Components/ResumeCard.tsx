import React from "react";
import { Card, CardContent } from "@mui/material";

interface Props {
  children: string;
  date: string;
  description?: string;
  details?: string;
}

const ResumeCard = ({ children, date, description, details }: Props) => {
  return (
    <div className="w-[500px]">
      <Card className="bg-secondary shadow-2xl rounded-xl">
        <CardContent>
          <div className="flex justify-between mr-4 text-lg">
            <p className="text-right text-2xl ">{children}</p>
            <p className="italic">{date}</p>
          </div>
          <hr className="mr-4 border-1 border-secondary-content pb-2" />
          <p className="text-left text-xl ">{details}</p>
          <p className="text-left text-xl">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeCard;
