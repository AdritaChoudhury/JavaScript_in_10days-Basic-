function getDayName(dateString) {
    const dayName=new Date(dateString);
    const days={
        weekday:'long'
    };
    return new Intl.DateTimeFormat('en-Us',days).format(dayName);
}
