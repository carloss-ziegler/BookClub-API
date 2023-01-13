export interface BookProps {
  id: string;
  author: string;
  title: string;
  stars: number;
  thumbnail: string;
  description: string;
  author_description: string;
}

export interface CardProps {
  id: number;
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardUserId: number;
}

export interface UserProps {
  id: string;
  username: string;
  profilePic?: string;
  email: string;
  city?: string;
  country?: string;
  name: string;
}

export interface FavoritesProps {
  id: string;
  userId: string;
  bookId: string;
}

export interface NotificationsProps {
  id: string;
  notificationsUserId: string;
}

export interface IGenresProps {
  id: string;
  label: string;
  type: string;
}
