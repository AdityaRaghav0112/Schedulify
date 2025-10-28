# Schedulify - CPU Scheduling Algorithm Visualizer

A comprehensive, interactive web application for visualizing CPU scheduling algorithms. Built with React, Tailwind CSS, and following MVC (Model-View-Controller) architecture principles.

## 🚀 Features

- **Multiple Scheduling Algorithms**: Visualize 6 different CPU scheduling algorithms
  - First Come First Served (FCFS)
  - Shortest Job First - Non-Preemptive (SJF)
  - Shortest Job First - Preemptive (SRTF)
  - Priority - Non-Preemptive
  - Priority - Preemptive
  - Round Robin (RR)

- **Interactive Process Management**: Add, edit, and remove processes dynamically
- **Real-time Visualization**: Gantt chart visualization of process execution
- **Detailed Statistics**: Turnaround time, waiting time, and completion time for each process
- **Average Metrics**: Calculate and display average turnaround and waiting times
- **Modern UI**: Beautiful, responsive design with Tailwind CSS

## 📁 Project Structure

This project follows **MVC (Model-View-Controller)** architecture for better code organization and maintainability:

```
Schedulify/
├── src/
│   ├── components/          # View Layer - Reusable UI components
│   │   ├── Navigation.jsx
│   │   ├── ProcessTable.jsx
│   │   ├── GanttChart.jsx
│   │   ├── StatisticsCards.jsx
│   │   ├── ProcessResultsTable.jsx
│   │   └── Footer.jsx
│   ├── services/            # Model Layer - Business logic
│   │   └── schedulingAlgorithms.js
│   ├── utils/               # Utility functions
│   │   └── processHelpers.js
│   ├── App.jsx              # Controller - Orchestrates Model and View
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles (Tailwind)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

### Architecture Overview

- **Model (services/)**: Contains all scheduling algorithm implementations. These are pure functions that take process data and return scheduling results.
- **View (components/)**: Reusable, presentational React components that render UI elements.
- **Controller (App.jsx)**: Manages application state, handles user interactions, and coordinates between Model and View layers.

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📖 Usage

1. **Add Processes**: Click "Add Process" to add new processes or edit existing ones in the table
2. **Configure Settings**: 
   - Select a scheduling algorithm from the dropdown
   - For Round Robin, set the time quantum
3. **Visualize**: Click "Visualize Scheduling" to see the algorithm in action
4. **View Results**: 
   - Gantt chart shows the execution timeline
   - Statistics cards display average metrics
   - Results table shows detailed information for each process

## 🎯 Process Properties

Each process requires:
- **ID**: Automatically assigned
- **Arrival Time**: When the process arrives in the ready queue
- **Burst Time**: CPU time required to complete the process
- **Priority**: Process priority (higher number = higher priority)

## 🔧 Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📝 Code Documentation

All code follows industry best practices with comprehensive JSDoc documentation:

- **File-level documentation**: Each file includes `@fileoverview` and `@module` tags
- **Function documentation**: All functions include parameter descriptions and return types
- **Component documentation**: React components include prop descriptions using JSDoc

## 🏗️ Design Principles

1. **Separation of Concerns**: Business logic (algorithms) is separated from UI components
2. **Reusability**: Components are designed to be reusable and independent
3. **Maintainability**: Clear structure and documentation make the codebase easy to maintain
4. **Scalability**: MVC architecture allows easy addition of new algorithms or features

## 📚 Algorithm Documentation

Each scheduling algorithm is documented in `src/services/schedulingAlgorithms.js` with:
- Algorithm description
- Time complexity notes
- Parameter descriptions
- Return value structure

## 🤝 Contributing

1. Follow the existing MVC structure
2. Add JSDoc documentation for new functions/components
3. Maintain code consistency with ESLint
4. Test algorithms with various process configurations

## 📄 License

This project is open source and available under the MIT License.

## 🎨 UI Features

- Dark theme with gradient backgrounds
- Smooth animations and transitions
- Responsive design for all screen sizes
- Interactive hover effects on Gantt chart
- Color-coded process visualization

---

Built with ❤️ using React and Tailwind CSS
