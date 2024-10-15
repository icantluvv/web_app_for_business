interface ChooseButtonProps {
  type: ButtonType;
  label: string;
  amount: number;
}
type ButtonType = "cash" | "cashless" | "safe" | "salary";
