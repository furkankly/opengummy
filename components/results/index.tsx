import { DoubleGummyBears, Sugar } from "@/components/gummies";
import { ResultsTable } from "@/components/results/results-table";

export function Results() {
  return (
    <div className="relative mx-auto mb-16 max-w-screen-lg">
      <ResultsTable />
      <div className="absolute inset-0 bottom-9 flex animate-pulse flex-col items-center justify-center gap-2">
        <div className="relative -right-10 -rotate-12">
          <DoubleGummyBears />
        </div>
        <div className="relative -left-10 rotate-12">
          <Sugar />
        </div>
        <div className="relative -right-10 rotate-45">
          <DoubleGummyBears />
        </div>
        <div className="relative -left-10 -rotate-45">
          <Sugar />
        </div>
        <div className="relative -right-10 -rotate-45">
          <DoubleGummyBears />
        </div>
        <div className="relative -left-10 -rotate-12">
          <Sugar />
        </div>
        <div className="relative -right-10 rotate-90">
          <DoubleGummyBears />
        </div>
        <div className="relative -left-10 rotate-90">
          <Sugar />
        </div>
        <div className="relative -right-10">
          <DoubleGummyBears />
        </div>
        <div className="relative -left-10 rotate-45">
          <Sugar />
        </div>
        <div className="relative -right-10 -rotate-90">
          <DoubleGummyBears />
        </div>
      </div>
    </div>
  );
}
