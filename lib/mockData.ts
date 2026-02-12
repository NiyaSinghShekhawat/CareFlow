// NOTE: This file is demo-only mock data and is currently not used in runtime code.
// We intentionally keep its types local to avoid coupling to the live Firebase models.

type MockPatient = {
  id: string;
  name: string;
  mrn: string;
  age: number;
  condition: string;
  room: string;
  created_at: string;
};

export const mockPatients: MockPatient[] = [
  {
    id: "p1",
    name: "John Doe",
    mrn: "MRN-2024-001",
    age: 58,
    condition: "Acute Chest Pain",
    room: "ER-3",
    created_at: new Date().toISOString(),
  },
  {
    id: "p2",
    name: "Sarah Johnson",
    mrn: "MRN-2024-002",
    age: 42,
    condition: "Post-Op Monitoring",
    room: "ICU-7",
    created_at: new Date().toISOString(),
  },
  {
    id: "p3",
    name: "Michael Chen",
    mrn: "MRN-2024-003",
    age: 67,
    condition: "Pneumonia",
    room: "Ward-12B",
    created_at: new Date().toISOString(),
  },
];

type MockOrder = {
  id: string;
  patient_id: string;
  patient_name: string;
  patient_mrn: string;
  department: string;
  test_type: string;
  priority: string;
  status: string;
  notes?: string;
  ordered_by: string;
  ordered_at: string;
  updated_at: string;
};

export const mockOrders: MockOrder[] = [
  {
    id: "o1",
    patient_id: "p1",
    patient_name: "John Doe",
    patient_mrn: "MRN-2024-001",
    department: "lab",
    test_type: "Troponin I",
    priority: "stat",
    status: "pending",
    notes: "Suspected MI - urgent cardiac markers",
    ordered_by: "Dr. Smith",
    ordered_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "o2",
    patient_id: "p1",
    patient_name: "John Doe",
    patient_mrn: "MRN-2024-001",
    department: "radiology",
    test_type: "Chest X-Ray",
    priority: "urgent",
    status: "processing",
    ordered_by: "Dr. Smith",
    ordered_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "o3",
    patient_id: "p2",
    patient_name: "Sarah Johnson",
    patient_mrn: "MRN-2024-002",
    department: "lab",
    test_type: "CBC",
    priority: "routine",
    status: "ready",
    ordered_by: "Dr. Williams",
    ordered_at: new Date(Date.now() - 3600000).toISOString(),
    updated_at: new Date().toISOString(),
  },
];
