export interface Review {
    id: number;
    name: string;
    rating: number;
    text: string;
    avatar: string;
  }
  
  export const reviews: Review[] = [
    {
      id: 1,
      name: "Sasindu Diluranga",
      rating: 5,
      text: "Amazing service! The clothing quality is outstanding and delivery was fast.",
      avatar: "https://i.ibb.co/M7CTKHH/Whats-App-Image-2024-10-07-at-9-58-55-PM-removebg-preview.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      text: "Great design, but wish there were more size options available.",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Emily Williams",
      rating: 5,
      text: "I love the clothes, they fit perfectly and are super stylish.",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      rating: 5,
      text: "Fantastic experience from start to finish. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];
  