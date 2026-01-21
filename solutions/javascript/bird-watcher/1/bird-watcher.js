// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let cont = 0

  for (let i = 0; i < birdsPerDay.length; i++)
    {
      cont += birdsPerDay[i]
    }

  return cont
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let cont = []

  for (let i = 0; i < week; i++)
    {
      let contabilizador = 0
      for (let j = i * 7; j < (i + 1) * 7; j++)
        {
          contabilizador += birdsPerDay[j]
        }
      cont.push(contabilizador)
    }

  return cont[week - 1]
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++)
    {
      if (i % 2 === 0)
      {
        birdsPerDay[i]++
      }
    }
  return birdsPerDay
}
