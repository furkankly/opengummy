"use client";

import { spaceMono } from "@/app/fonts";
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
import * as cases from "@luca/cases";
import { useQuery } from "@tanstack/react-query";
import { getResults } from "./actions";

export function ResultsTable() {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: async () => await getResults(),
    retry: true,
    retryDelay: 500,
  });

  let total = 0;
  if (data) {
    data.reduce((prev, gummy) => {
      total = prev + (gummy.votes as number);
      return total;
    }, total);
  }

  return (
    <Table id="results" className={spaceMono.className}>
      <TableCaption>
        The pinnacle of human intellectual endeavor in ranking gummies.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Gummy</TableHead>
          <TableHead className="text-right">Votes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((gummy) => (
            <TableRow key={gummy.id}>
              <TableCell className="font-medium">
                {cases.titleCase(gummy.name as string)}
              </TableCell>
              <TableCell className="text-right font-medium">
                {gummy.votes}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right">{total}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
