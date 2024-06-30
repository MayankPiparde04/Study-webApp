import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Slot, useRouter } from "expo-router";
import "../global.css";

const MainLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('home');
  }, []);

  return <Slot />;
};

const _layout = () => {
  return (
    <MainLayout />
  );
};

export default _layout;

const styles = StyleSheet.create({});
