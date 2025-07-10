"use client"

export interface Row {
  id: number
  firstName: string
  lastName: string
  age: number
  email: string
  department: string
  salary: number
  joinDate: Date
}

// Generate a large dataset to demonstrate virtualization
export const generateLargeDataset = (size: number): Row[] => {
  const firstNames = [
    "Jon",
    "Cersei",
    "Jaime",
    "Arya",
    "Daenerys",
    "Tyrion",
    "Sansa",
    "Bran",
    "Robb",
    "Catelyn",
    "Ned",
    "Joffrey",
    "Tommen",
    "Myrcella",
    "Stannis",
    "Renly",
    "Robert",
    "Lyanna",
    "Brandon",
    "Rickard",
  ]
  const lastNames = [
    "Snow",
    "Lannister",
    "Stark",
    "Targaryen",
    "Baratheon",
    "Tully",
    "Arryn",
    "Greyjoy",
    "Martell",
    "Tyrell",
    "Bolton",
    "Frey",
    "Mormont",
    "Reed",
    "Umber",
    "Karstark",
    "Manderly",
    "Glover",
    "Hornwood",
    "Cerwyn",
  ]

  return Array.from({ length: size }, (_, index) => ({
    id: index + 1,
    firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    age: Math.floor(Math.random() * 80) + 10,
    email: `user${index + 1}@example.com`,
    department: ["Engineering", "Marketing", "Sales", "HR", "Finance"][Math.floor(Math.random() * 5)],
    salary: Math.floor(Math.random() * 100000) + 30000,
    joinDate: new Date(
      2020 + Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
  }))
} 