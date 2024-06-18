import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  money = 0

  snacks = [
    
      new Snack (
        'Chips',
        '3.50',
        "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),

      new Snack (
        'Candy',
        '2.50',
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ),

      new Snack (
      'Hummus',
      '4.50',
      'https://images.unsplash.com/photo-1536974851270-95538a335a81?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ),

      new Snack (
      'Healthy Snacks',
      '5.00',
      'https://images.unsplash.com/photo-1569420067112-b57b4f024595?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25hY2tzfGVufDB8fDB8fHww'
      ),

    new Snack (
      'Charcuterie Board',
      '10.00',
      'https://images.unsplash.com/photo-1517093602195-b40af9688b46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25hY2tzfGVufDB8fDB8fHww'
    ),

    new Snack (
      'Donuts',
      '4.50',
      'https://images.unsplash.com/photo-1575549595260-623d27ba5e44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D'
    ),

    new Snack (
      'Cookies',
      '3.00',
      'https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D'
    ),

    new Snack (
      'Popcorn',
      '1.50',
      'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNuYWNrc3xlbnwwfHwwfHx8MA%3D%3D'
    )
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())