
class BirdWatcher {
    private final int[] birdsPerDay;
    

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return birdsPerDay;

    }

    public int getToday() {
        return birdsPerDay[birdsPerDay.length - 1];
    }

    public void incrementTodaysCount() {
        birdsPerDay[birdsPerDay.length - 1]++;
        
    }

    public boolean hasDayWithoutBirds() {
        for (int i = 0; i < birdsPerDay.length; i++)
            {
                if (birdsPerDay[i] == 0)
                {
                    return true;
                }
            }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int cont = 0;

        if (numberOfDays <= birdsPerDay.length)
        {
            for (int i = 0; i < numberOfDays; i++)
            {
                cont += birdsPerDay[i];
            }
        }
        else
        {
            for (int i = 0; i < birdsPerDay.length; i++)
            {
                cont += birdsPerDay[i];
            }
        }
        
        return cont;
    }

    public int getBusyDays() {
        int cont = 0;

        for (int i = 0; i < birdsPerDay.length; i++)
            {
                if (birdsPerDay[i] >= 5)
                {
                    cont++;
                }
            }
        return cont;
    }
}
