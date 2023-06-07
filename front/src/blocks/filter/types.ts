export interface IFilterProps {
  onFilterAction: () => Promise<void>;
  onFilterChange: (value: string) => void;
  placeholder?: string;
}
