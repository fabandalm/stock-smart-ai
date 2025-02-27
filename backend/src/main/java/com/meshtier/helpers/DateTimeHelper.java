package com.meshtier.helpers;

import java.util.*;

public class DateTimeHelper {
    public static Map<String, Integer> initializeMonths() {
        Map<String, Integer> months = new LinkedHashMap<>();
        Calendar calendar = Calendar.getInstance();
        for (int i = 5; i >= 0; i--) {
            calendar.add(Calendar.MONTH, -i);
            String monthName = calendar.getDisplayName(Calendar.MONTH, Calendar.LONG, Locale.ENGLISH);
            months.put(monthName, 0);
        }
        return months;
    }

    public static void fillMonthData(List<Object[]> data, Map<String, Integer> monthProgress) {
        for (Object[] row : data) {
            Integer month = (Integer) row[0];
            Integer quantity = ((Number) row[1]).intValue();

            // Convert month number to month name
            Calendar calendar = Calendar.getInstance();
            calendar.set(Calendar.MONTH, month - 1);
            String monthName = calendar.getDisplayName(Calendar.MONTH, Calendar.LONG, Locale.ENGLISH);

            // Update the month with the actual quantity
            monthProgress.put(monthName, quantity);
        }
    }
}
