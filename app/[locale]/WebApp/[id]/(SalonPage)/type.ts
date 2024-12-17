interface WorkShopProps {
  workshop: WorkShop;
}

interface WorkShop {
  id: string;
  type: string;
  logo: string;
  address: Address;
  isFavorite: boolean;
  description: string;
  name: string;
  canEdit: boolean;
  isActive: boolean;
  localeId: string;
}

interface AddressProps {
  AddressProp: Address;
}

interface Address {
  longitude: number;
  city: string;
  country: string;
  latitude: number;
  address: string;
}

interface Schedule {}

interface IdProps {
  id: string;
}

interface ScheduleProps {
  day: string;
  time: {
    workTime: string;
    offTime: string;
  };
}

interface Week {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thirsday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
}

interface Day {
  workTime: string;
  offTime: string;
}
