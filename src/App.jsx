import { useState } from 'react'
import { Content } from './components/Content/Content'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { Header } from './components/Header/Header';
import './App.scss'

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header></Header>
        <Content />
      </QueryClientProvider>
    </>
  )
}

export default App
