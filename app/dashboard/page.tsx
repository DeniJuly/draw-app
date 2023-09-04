"use client"
import { getCurrentUser } from '@/lib/session'
import React from 'react'

async function Dashboard() {
    const user = await getCurrentUser();
    console.log('user', user)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard