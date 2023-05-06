export const gridOptions = {
    // Define la localización en español
    localeText: 'es',
    
    // Personaliza los textos de los filtros
    localeTextFunc: function (key, defaultValue) {        
        // Define un objeto con los textos personalizados
        const customTexts = {
            // Personaliza el texto del botón "Apply Filter"
            'applyFilter': 'Aplicar Filtro',

            // Personaliza el texto del botón "Clear Filter"
            'clearFilter': 'Limpiar Filtro',

            // Personaliza el texto del placeholder del input de texto
            'filterOoo': 'Filtrar...',

            // Agrega textos personalizados para los filtros específicos
            'startsWith': 'Comienza con',
            'endsWith': 'Termina con',
            'contains': 'Contiene',
            'notContains': 'No contiene',
            'equals': 'Igual a',
            'notEqual': 'Distinto a',
            'greaterThan': 'Mayor que',
            'greaterThanOrEqual': 'Mayor o igual que',
            'lessThan': 'Menor que',
            'lessThanOrEqual': 'Menor o igual que',
            'inRange': 'En rango',
            'inRangeStart': 'Desde',
            'inRangeEnd': 'Hasta',
            'blank': 'Vacio',
            'notBlank': 'No vacio',
            'empty': 'Vacio',
            'notEmpty': 'No vacio',
            'null': 'Nulo',
            'notNull': 'No nulo',
            'date': 'Fecha',

            // Agregar textos personalizados para la paginacion
            'page': 'Página',
            'to': 'a',
            'of': 'de',
            'next': 'Siguiente',
            'last': 'Última',
            'first': 'Primera',
            'previous': 'Anterior',
            'loadingOoo': 'Cargando...',

        };

        // Retorna el texto personalizado si existe
        if (customTexts[key]) {
            return customTexts[key];
        }

        // Retorna el texto predeterminado de la localización
        return defaultValue;
    },
}