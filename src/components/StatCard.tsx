interface StatCardProps {
  label: string;
  value: string;
}

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-3xl font-bold text-accent mb-2">{value}</div>
      <div className="text-primary">{label}</div>
    </div>
  );
};

export default StatCard;