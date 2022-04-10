import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, FlatList} from 'react-native';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {Input, SearchInput, Card} from '../../components';
import {useProduct, AddProps, FormProps} from '../../context/useProduct';

import * as S from './styles';

const FormSchema = Yup.object().shape({
  nameProduct: Yup.string().required('O nome do produto é obrigatório'),

  valueUnityProduct: Yup.number()
    .required('O valor da unidade é obrigatório')
    .min(0, 'O valor da unidade deve ser positivo'),

  quantity: Yup.number()
    .required('A quantidade é obrigatório')
    .min(1, 'No mínimo um item')
    .min(0, 'Quantidade deve ser um valor positivo')
    .integer(),
});

export const Home = () => {
  const {addProduct, productList} = useProduct();

  const [filterSearch, setFilterSearch] = useState([] as FormProps[]);

  const searchFilter = useCallback(
    (text?: string) => {
      if (text) {
        const newProductList = productList.filter(product => {
          const productData = product.nameProduct
            ? product.nameProduct.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return productData.indexOf(textData) > -1;
        });

        setFilterSearch(newProductList);
      } else {
        setFilterSearch(productList);
      }
    },
    [productList],
  );

  useEffect(() => {
    searchFilter();
  }, [searchFilter]);

  return (
    <S.Container>
      <ScrollView>
        <S.TitleWrapper>
          <S.Title>Cumbuca Cervejaria</S.Title>
        </S.TitleWrapper>

        <SearchInput
          placeholder="Pesquise por um produto"
          searchFilter={e => searchFilter(e.nativeEvent.text)}
        />

        <Formik
          initialValues={{
            nameProduct: '',
            valueUnityProduct: '',
            quantity: '',
          }}
          onSubmit={(value: AddProps, {resetForm}) => {
            addProduct(value);
            resetForm();
          }}
          validationSchema={FormSchema}
          validateOnChange={false}
          validateOnBlur={false}>
          {({handleSubmit, values, errors, handleChange}) => (
            <>
              <S.FormWrapper>
                <Input
                  label="Nome do produto"
                  value={values.nameProduct}
                  error={errors.nameProduct}
                  onChangeText={handleChange('nameProduct')}
                />

                <Input
                  label="Valor unitário(R$)"
                  keyboardType="phone-pad"
                  value={values.valueUnityProduct}
                  error={errors.valueUnityProduct}
                  onChangeText={handleChange('valueUnityProduct')}
                />

                <Input
                  label="Quantidade em estoque"
                  keyboardType="phone-pad"
                  value={values.quantity}
                  error={errors.quantity}
                  onChangeText={handleChange('quantity')}
                />
              </S.FormWrapper>

              <S.ButtonWrapper>
                <S.ButtonSubmit onPress={handleSubmit}>
                  <S.TitleButton>Adicionar</S.TitleButton>
                </S.ButtonSubmit>
              </S.ButtonWrapper>
            </>
          )}
        </Formik>

        <S.ProductFlatlistContainer>
          {!!productList?.length && (
            <FlatList
              nestedScrollEnabled
              ListHeaderComponent={() => <S.NameList>Produtos</S.NameList>}
              data={filterSearch}
              keyExtractor={item => String(item.indexProduct)}
              renderItem={({item: product}) => (
                <ScrollView>
                  <Card productInfo={product} />
                </ScrollView>
              )}
              horizontal={false}
              numColumns={1}
              onEndReachedThreshold={0.1}
              ItemSeparatorComponent={() => <S.Separator />}
              ListEmptyComponent={
                <S.EmptyList>
                  <S.EmptyText>Nada encontrado</S.EmptyText>
                  <S.Separator />
                </S.EmptyList>
              }
            />
          )}
        </S.ProductFlatlistContainer>
      </ScrollView>
    </S.Container>
  );
};
