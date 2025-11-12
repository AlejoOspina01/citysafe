'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

/**
 * City Safety Index Component
 * Displays trending incident data using a line chart
 */
const chartData = [
  { month: 'Jan', incidents: 24, resolved: 20 },
  { month: 'Feb', incidents: 18, resolved: 15 },
  { month: 'Mar', incidents: 32, resolved: 28 },
  { month: 'Apr', incidents: 28, resolved: 25 },
  { month: 'May', incidents: 35, resolved: 30 },
  { month: 'Jun', incidents: 22, resolved: 20 },
  { month: 'Jul', incidents: 19, resolved: 18 },
  { month: 'Aug', incidents: 25, resolved: 23 },
  { month: 'Sep', incidents: 29, resolved: 26 },
  { month: 'Oct', incidents: 31, resolved: 28 },
  { month: 'Nov', incidents: 15, resolved: 14 },
];

export function CitySafetyIndex() {
  return (
    <section className="w-full py-16 md:py-24 bg-linear-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            City Safety Index
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Track incident trends and community safety improvements over time
          </p>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line
                type="monotone"
                dataKey="incidents"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: '#2563eb', r: 4 }}
                activeDot={{ r: 6 }}
                name="Total Incidents"
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
                name="Resolved"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Key Stats */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            className="rounded-lg bg-white p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-600">Average Resolution Rate</p>
            <p className="mt-2 text-3xl font-bold text-green-600">89%</p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-white p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-600">Community Engagement</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">2,450+</p>
            <p className="mt-1 text-xs text-gray-500">Active reporters</p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-white p-6 shadow-sm border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-600">Average Response Time</p>
            <p className="mt-2 text-3xl font-bold text-orange-600">2.4h</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
