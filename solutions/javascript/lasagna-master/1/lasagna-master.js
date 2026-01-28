/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
  if (minutes === undefined)
  {
   return 'You forgot to set the timer.'
  }
  else if (minutes === 0)
  {
    return 'Lasagna is done.'
  }
  else
  {
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers, minutes) {
  if (minutes == undefined)
  {
    minutes = 2
  }

  return minutes * layers.length
}

export function quantities(layers)
{  
  let sauc = 0.0, noodle = 0
  for (let i = 0; i < layers.length; i++)
    {
      switch(layers[i])
        {
          case 'sauce':
            sauc += 0.2
            break;
          case 'noodles':
            noodle += 50
            break;
          default:
            break;
        }
    }
  return {
    noodles: noodle,
    sauce: sauc,
  }
}

export function addSecretIngredient(friendsList, myList)
{
  for (let i = 0; i < myList.length; i++)
    {
      console.log(myList[i])
    }
  console.log('')
  for (let i = 0; i < friendsList.length; i++)
    {
      console.log(friendsList[i])
    }

  myList.push(friendsList[friendsList.length - 1])

  for (let i = 0; i < myList.length; i++)
    {
      console.log(myList[i])
    }
  return;
}

export function scaleRecipe(recipe, portions) {

  const teste = {
    ...recipe,
  }

  let qntd = portions / 2
  for (let obj in teste)
    {
      teste[obj] *= qntd
    }

  return teste

}


