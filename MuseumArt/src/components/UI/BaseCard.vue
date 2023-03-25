<template>
    <div class="base-card">
      <slot></slot>
    </div>
  </template>
  
 
  
  <style scoped>
  .base-card {
    background-color: #908160;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    border-radius: 8px;
    padding: 16px;
    margin:1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color:black
  }
  </style>
  