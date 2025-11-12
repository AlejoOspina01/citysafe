'use client';

import { useState } from 'react';
import { AdminSidebar } from '@/components/admin-sidebar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { mockIncidents } from '@/data/mock-incidents';
import { Search, Filter } from 'lucide-react';

/**
 * Incident Reports List Page (/admin/reports)
 * Displays all incident reports in a filterable table
 * Supports filtering by type and status
 */
export default function IncidentReportsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Get unique incident types
  const incidentTypes = [...new Set(mockIncidents.map((i) => i.type))];
  const statuses = ['pending', 'resolved', 'investigating'];

  // Filter incidents
  const filteredIncidents = mockIncidents.filter((incident) => {
    const matchesSearch =
      incident.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = typeFilter === 'all' || incident.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || incident.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between px-6 py-4 md:px-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Incident Reports</h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage and filter all community incident reports
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Filters */}
          <motion.div
            className="mb-6 grid gap-4 md:grid-cols-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by ID, location, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Type Filter */}
            <div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {incidentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              {/* Table Header */}
              <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <p className="text-sm font-medium text-gray-700">
                  Showing {filteredIncidents.length} of {mockIncidents.length} reports
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-3 text-left font-medium text-gray-700">ID</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">Type</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">Date</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">Status</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">
                        Reporter
                      </th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left font-medium text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredIncidents.length > 0 ? (
                      filteredIncidents.map((incident, index) => (
                        <motion.tr
                          key={incident.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                          <td className="px-6 py-4 font-mono font-medium text-gray-900">
                            {incident.id}
                          </td>
                          <td className="px-6 py-4 text-gray-700">{incident.type}</td>
                          <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                            {incident.location}
                          </td>
                          <td className="px-6 py-4 text-gray-600">{incident.date}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                incident.status === 'resolved'
                                  ? 'bg-green-100 text-green-800'
                                  : incident.status === 'pending'
                                    ? 'bg-orange-100 text-orange-800'
                                    : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {incident.status.charAt(0).toUpperCase() +
                                incident.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{incident.reporter}</td>
                          <td className="px-6 py-4 text-gray-600 truncate max-w-xs">
                            {incident.description}
                          </td>
                          <td className="px-6 py-4">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            >
                              View
                            </Button>
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center">
                          <p className="text-gray-500">No incidents found matching your filters.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
