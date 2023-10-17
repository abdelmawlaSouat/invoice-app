import invoices from "@/constants/invoices";

type Props = {
  params: {
    id: string;
  };
};

export default function Invoice({ params }: Props) {
  return <div>Invoice page {params.id} </div>;
}

export function generateStaticParams() {
  return invoices.map(({ id }) => ({
    id,
  }));
}
