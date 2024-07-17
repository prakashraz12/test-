"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "../ui/checkbox";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import {
  EllipsisVertical,
  Mail,
  MailOpen,
  MapPin,
  Phone,
} from "lucide-react";
import TopTableButton from "./_components/topBarToggle";
import { Badge } from "../ui/badge";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
];

export function TableDemo() {
  return (
    <>
      <table className="w-full mt-6 border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="text-left align-middle px-3 bg-gray-100 text-gray-500 py-1 border-l border-t border-b  w-[200px] rounded-tl-md rounded-bl-md">
              <TopTableButton label={"Profile"} />
            </th>
            <th className="border-t text-left align-middle border-b bg-gray-100 text-gray-500">
              <TopTableButton label={"Conatcts"} />
            </th>
            <th className="border-t text-left align-middle border-b bg-gray-100 text-gray-500">
              <TopTableButton label={"Company"} />
            </th>
            <th className="border-t text-left align-middle border-b bg-gray-100 text-gray-500">
              <TopTableButton label={"Status"} />
            </th>
            <th className=" border-t text-left align-middle border-b bg-gray-100 text-gray-500">
              <TopTableButton label={"Location"} />
            </th>
            <th className="text-left align-middle border-t border-b border-r rounded-tr-lg rounded-br-lg bg-gray-100 text-gray-500">
              <TopTableButton label={"Quick Actions"} />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr
              key={invoice.invoice}
              className="border-2 border-gray-500 rounded-lg border-b-2 p-5 "
            >
              <td className="rounded-tl-md rounded-bl-md  py-8 px-4 text-left border-t border-b border-l">
                <span className="flex items-center gap-3">
                  <Checkbox />
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"></AvatarImage>
                    <AvatarFallback>Cn</AvatarFallback>
                  </Avatar>
                  <p className="text-sm whitespace-nowrap">Cody Fisher</p>
                </span>
              </td>
              <td className="p-4 items-start border-t border-b">
                <span className="flex text-sm font-bold items-center gap-2">
                  <Phone className="w-5 text-gray-500" />
                  (848)22299
                </span>
                <span className="flex text-sm font-bold items-center gap-2 underline">
                  <Mail className="w-5 text-gray-500" /> robertfox@example.com
                </span>
              </td>
              <td className="px-4 py-6  border-t border-b">
                <span className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"></AvatarImage>
                    <AvatarFallback>Cn</AvatarFallback>
                  </Avatar>
                  <p>Global Spex x</p>
                </span>
              </td>
              <td className="px-4 py-6 border-t border-b text-left  items-start">
                <Badge className="rounded-md bg-green-100 text-green-700 font-semibold">
                  Contacted
                </Badge>
              </td>
              <td className="px-4 py-6 text-left  border-b border-t">
                <span className="flex text-gray-400 text-sm font-thin items-center">
                  <MapPin className="w-5" />
                  Austin
                </span>
              </td>
              <td className="px-4 py-6 text-left  border-t border-b border-r rounded-tr-md rounded-bl-md">
                <span className="flex gap-2 items-center">
                  <Button
                    className="flex gap-1 text-sm font-bold border-2 border-slate-900 rounded-md"
                    variant={"outline"}
                  >
                    <Phone className="w-4 font-bold" />
                    Call
                  </Button>
                  <Button
                    className="flex gap-1 font-bold rounded-md border-slate-900 border-2"
                    variant={"outline"}
                  >
                    <MailOpen className="w-4" />
                    Mail
                  </Button>
                  <EllipsisVertical className="text-gray-300" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
