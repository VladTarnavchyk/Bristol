define([
    "underscore",
    "jquery",
    "jquery/ui"
], function (_, $) {
    'use strict';

    $.widget('mage.amShopbyApplyFilters', {
        canApplyFilter: false,
        _create: function () {
            var self = this;
            $(function(){
                self.initEvents();
                function normilizeData(data){
                    var normilizeData = [];

                    _.each(data, function(item){
                        if (item.value.trim() != '' && item.value != '-1' && item.name != 'amshopby[attr_price_from][]' && item.name != 'amshopby[attr_price_to][]') {
                            var normilizeItem = _.find(normilizeData, function (normilizeItem) {
                                return normilizeItem.name === item.name && normilizeItem.value === item.value;
                            });

                            if (!normilizeItem) {
                                normilizeData.push(item);
                            }
                        }
                    });
                    return normilizeData;
                }

                var $element = $(self.element[0]);
                var $navigation = $element.closest(self.options.navigationSelector);
                $navigation.find('#narrow-by-list').append($element.parent());

                $element.on('click', function(e){
                    var valid = true;
                    $(this).trigger('amshopby:apply_filters_before');
                    $navigation.find('form').each(function(){
                        valid = valid && $(this).valid();
                    });
                    var forms = $('form[data-amshopby-filter]');
					
					
                    var data = normilizeData(forms.serializeArray());
                    var validData = _.filter(data, function(item){
                        return item.name !== 'amasty_shopby_replace_url';
                    });
					
					// Видалення з назви підоб'єкта лишнього
					let counter = 0;
					while (counter <= (data.length - 1)) {
						var item_name = data[counter].name.replace('amshopby[', '');
						item_name = item_name.replace('][]', '');
						data[counter].name = item_name;
						counter++;
					}
					
					// Перевірка на однакові імена в підоб'єктах обєкта data
					var deleted_prop = [];
					let i = 0;
					while (i < (data.length - 1)) {
						// Перевірка кожного елемента зі всіма, які йдуть після нього
						let j = i + 1;
						while (j <= (data.length - 1)) {
							if(data[i].name == data[j].name) {
								data[i].value = data[i].value + ',' + data[j].value;
								if(deleted_prop.indexOf(j) == -1) {
									deleted_prop.push(j);
								}
							}
							j++;
						}
						i++;
					}
					
					// Видалення дублів підоб'єктів з одинаковим іменем
					let h = 0;
					while (h <= (deleted_prop.length - 1)) {
						data.splice(deleted_prop[h] - h, 1);
						h++;
					}
					
                    if (valid && self.canApplyFilter) {
                        $(this).trigger('amshopby:apply_filters', [
                            data,
                            self.options.clearUrl
                        ]);
                        if (self.options.ajaxEnabled !== 1) {
                            var params = $.param(data);
							
                            var url = self.options.clearUrl +
                                (self.options.clearUrl.indexOf('?') === -1 ? '?' : '&') +
                                params;
							
                            document.location.href = url;
                        }
                    }

                    this.blur();
                    return true;
                });

            });
        },
        initEvents: function(){
            $(document).on("change","[data-amshopby-filter]",function() {
                this.canApplyFilter = true;
            }.bind(this));
        }
    });
});
